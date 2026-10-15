export type EncryptedPassword = {
  wrapped_key: string;
  iv: string;
  ciphertext: string;
};

function bytesToBase64(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}

function base64ToBytes(value: string): Uint8Array {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

export async function encryptInvitePassword(
  publicKeySpkiB64: string,
  password: string,
): Promise<EncryptedPassword> {
  const publicKey = await crypto.subtle.importKey(
    "spki",
    base64ToBytes(publicKeySpkiB64),
    { name: "RSA-OAEP", hash: "SHA-256" },
    false,
    ["wrapKey"],
  );
  const aesKey = await crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, true, ["encrypt"]);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ciphertext = new Uint8Array(
    await crypto.subtle.encrypt(
      { name: "AES-GCM", iv },
      aesKey,
      new TextEncoder().encode(password),
    ),
  );
  const wrapped = new Uint8Array(
    await crypto.subtle.wrapKey("raw", aesKey, publicKey, { name: "RSA-OAEP" }),
  );
  return {
    wrapped_key: bytesToBase64(wrapped),
    iv: bytesToBase64(iv),
    ciphertext: bytesToBase64(ciphertext),
  };
}
