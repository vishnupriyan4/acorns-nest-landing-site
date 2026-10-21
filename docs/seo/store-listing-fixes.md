# App Store & Google Play — Week 1 fixes

Pulled from the SEO + GEO audit, with my recommended drafts. Everything here is
done in App Store Connect / Google Play Console, not in code.

## 1. Clean the pasted link-preview junk from both descriptions

Both store descriptions currently end with:

> …support@acornsnest.comacornsnest.comPrivacy Policy | Acorns NestHow Acorns Nest
> collects…acornsnest.comacornsnest.comTerms of Use | Acorns Nest…

That is a link-preview snippet that got pasted in by accident. Delete everything
after the final line of real copy. Replace with a clean footer:

```
Privacy Policy: https://acornsnest.com/privacy
Terms of Use:   https://acornsnest.com/terms
Support and account deletion: support@acornsnest.com
```

## 2. App Store Connect (iOS) — fields to update

### App name  (≤ 30 chars)

```
Acorns Nest: Daycare App
```

Currently it is just `Acorns Nest` (11 chars). Adding "Daycare App" doubles the
keyword surface the App Store search algorithm indexes on without changing the
brand feel.

### Subtitle  (≤ 30 chars)  — currently blank

```
Daycare logs & parent updates
```

(29 chars.) The App Store treats the subtitle as a second-tier title for
ranking. Right now the product page shows the category "Education" where the
subtitle should be, which is a visible miss.

### Keywords  (≤ 100 chars, comma-separated, no spaces, do NOT repeat the title)

```
childcare,preschool,attendance,check-in,nap,meal,teacher,ece,centre,classroom,report,menu,canada
```

Keywords are invisible to users but critical for App Store search. Do not
repeat `acorns`, `nest`, `daycare` or `app` here — they are already indexed
from the title and subtitle.

### Promotional text  (≤ 170 chars)

```
Built in Halifax for licensed childcare centres. Log attendance, naps and
meals from the room; families see the day when you publish it.
```

Promotional text can be updated without a resubmission.

### What's new  (version notes)

Current: "UI Enhancements and Bug fixes" — fine for a bugfix, but on a next
feature release, mention the feature by name (e.g. "New: Outing Mode return
reminders" ) so it indexes under those words.

### Primary category / subcategory

Keep **Education** as primary. Switch secondary from **Lifestyle** to
**Business** — the audit found "Business" is where every competitor lives
(Lillio, brightwheel, Procare), and search queries like "daycare management
app" look at business apps first.

### Screenshots

Captions are good. Two tweaks:

1. Lead with **Attendance** or **Parent daily report**, not Outing Mode.
   Outing Mode is the most distinctive feature, but attendance is the bigger
   hook for a director scrolling the page.
2. The caption uses `Center` (US) while the website uses `Centre` (CA).
   Change caption spellings to `Centre` to match your home market.

## 3. Google Play Console (Android) — fields to update

### Title  (≤ 30 chars)

```
Acorns Nest: Childcare App
```

### Short description  (≤ 80 chars)  — currently 0 keywords

Current: `Staff log the day in the room, and parents see it as it happens.`

Replace with:

```
Daycare app for attendance, naps, meals and parent updates in licensed centres.
```

(79 chars.) Short description is one of the strongest ranking signals in Play
search.

### Full description  — opening paragraph

Replace the current opening with:

```
Acorns Nest is the daycare and childcare app for licensed centres in Canada.
Teachers and ECEs log check-in, naps, meals and infant milk from the
classroom floor, and parents and guardians see how the day went without
waiting for pickup.
```

Keep the existing `FOR TEACHERS`, `FOR PARENTS`, `PUBLISHED ON THE CENTRE'S
SCHEDULE`, `BUILT FOR LICENSED CHILDCARE`, and `PRIVACY` sections as-is.
Then end with the clean footer from §1.

---

## 4. Privacy labels — ACTION REQUIRED, review by Monday

The audit flagged this as a high-severity trust and store-review risk, and
it is correct.

### Current state

- App Store privacy label: **Data Not Collected**
- Google Play Data Safety: **No data collected / No data shared**
- Privacy policy: describes collecting child and parent records, photos,
  messages and account emails, stored in **Supabase in the United States**,
  with push notifications and Gemini (Google) calls

### Why this is wrong under Apple's and Google's definitions

Both platforms count data as "collected" when:

- it is sent off the device, AND
- it is **transmitted to or stored by** the developer or any of the
  developer's processors (your Supabase instance qualifies)

Your privacy policy correctly describes exactly this. The labels do not match.

### Risk if left as-is

1. **App review**: a reviewer who compares the label with the policy can
   reject the update, or pull the app for misrepresentation. This has
   happened to much bigger apps than Acorns Nest.
2. **Trust**: a director doing diligence will see the mismatch and bounce.
   Many provincial childcare funding bodies require vendors to publish an
   accurate privacy posture — the mismatch alone can disqualify you from
   procurement.

### What to re-declare (both stores)

Treat these categories as **collected and linked to the user**:

| Category                 | App Store category                 | Play category                    |
|--------------------------|-------------------------------------|----------------------------------|
| Email                    | Contact Info → Email Address        | Personal info → Email            |
| Name                     | Contact Info → Name                 | Personal info → Name             |
| Phone                    | Contact Info → Phone (if collected) | Personal info → Phone            |
| Children's names/records | Sensitive Info → Health & Fitness or User Content → Other User Content, depending on scope | App activity / Personal info → Other info |
| Photos uploaded          | User Content → Photos or Videos     | Photos and videos                |
| Messages                 | User Content → Other User Content   | Messages                         |
| Device identifiers       | Identifiers → User ID / Device ID   | App info and performance / Device or other IDs |
| Diagnostics / crashes    | Diagnostics                         | App info and performance         |

Purposes: **App Functionality** on all of them. **Not** for Analytics,
**Not** for Advertising, **Not** for Third-Party Advertising. If push
notifications go through FCM/APNs, declare the device token under Identifiers.

### Where this ties back to SEO

It does not directly affect ranking, but it will torpedo conversion once a
director lands on the listing. Fix it in the same push as the title/
subtitle/keyword changes above.

---

## 5. Also next

- **Move the App Store account from "Vishnu Priyan Mahendran" (individual) to
  "Acorns Nest Inc." (organization).** Apple requires a D-U-N-S number
  (free from Dun & Bradstreet, ~2 weeks). The seller name is a buyer trust
  signal and today it reads as a solo-dev side project.
- **Pick ONE phone number** (keep the 782/902 Halifax number, drop the 807
  Ontario one from the Play listing). Put the chosen number in: footer,
  /support, Organization JSON-LD, App Store, Play, LinkedIn, Crunchbase.
- **Request reviews from your first centres** via `SKStoreReviewController`
  (iOS) and Play In-App Review API. Even 5 real reviews is enough to make
  the listing feel real; 10+ is enough to start ranking.
