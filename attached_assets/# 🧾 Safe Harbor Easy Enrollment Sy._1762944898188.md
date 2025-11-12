# 🧾 Safe Harbor Easy Enrollment System
**Version:** 1.0  
**Date:** 2025-11-10  
**Author:** Adam James / Safe Harbor Behavioral Health  
**Reviewed by:** Automation Specialist (Replit + GoHighLevel Expert)

---

## 🎯 Purpose
The **Safe Harbor Easy Enrollment System** simplifies how daycare parents join the Body & Brain™ Program.  
It uses:
- **Replit** (for modern bilingual landing pages + check-in page)
- **GoHighLevel (GHL)** (for forms, automations, and reminders)
- **Free QR API** (for attendance tracking)

Parents fill out a short bilingual form → receive a welcome email with videos → get reminders to finish TherapyNotes paperwork → after manual staff verification, they’re invited to book their child’s first assessment.  
Attendance is tracked via QR codes scanned at daycare sites.

---

## ⚙️ Tech Stack

| Layer | Tool | Purpose |
|--------|------|----------|
| **Frontend** | Replit (React + Tailwind + shadcn/ui) | Landing & check-in UI |
| **Backend / CRM** | GoHighLevel | Form handling, automations, SMS/email |
| **QR Generator** | goqr.me API | Creates per-contact QR images |
| **Calendar / Appointments** | GHL Calendar | Therapist scheduling & reminders |
| **Video Hosting** | YouTube / Loom | Welcome & TherapyNotes training |
| **Hosting** | Replit → `https://safeharboreasyenrollment.com` | Main public site |

---

## 🧱 System Flow

1. **Parent visits landing page**  
   → Fills out bilingual form (EN/ES).

2. **Workflow 1 (Intake)**  
   → Generates QR code.  
   → Sends welcome email + SMS.  
   → Starts 60-day campaign (reminders every other day).

3. **Manual check step:**  
   Staff mark `PaperworkComplete` tag in GHL after verifying in TherapyNotes.

4. **Workflow 2 (Booking)**  
   → Sends booking link for therapist assessment.

5. **Workflow 3 (Reminders)**  
   → Sends 24h + 3h + 1h appointment reminders.  
   → No-show triggers reschedule link.

6. **QR Check-in (Attendance)**  
   → Staff scan QR → check-in form marks attendance.  
   → Field `Last_Check_In_Date` updates automatically.

---

## 🧩 Data Schema

### A. GHL Custom Fields

| Field | Type | Example | Purpose |
|--------|------|----------|----------|
| `QR_Code_URL` | Text | `https://api.qrserver.com/v1/create-qr-code/?data=https://safeharboreasyenrollment.com/checkin?id=123` | Stores generated QR |
| `Last_Check_In_Date` | Date | `2025-11-10` | Latest attendance date |
| `NextReviewDate` | Date | `2026-02-10` | Sets 3-month follow-up |
| `Preferred_Language` | Text | EN / ES | Determines messaging |
| `Daycare_Name` | Text | Butterfly Academy | Associates parent to site |
| `Child_First_Name` | Text | Aiden | Reference (non-PHI) |
| `Parent_Email` | Text | maria@example.com | Email comms |
| `Parent_Phone` | Phone | 918-555-1212 | SMS reminders |

---

### B. GHL Tags

| Tag | Description | Trigger |
|------|--------------|----------|
| `ParentIntake-Started` | New parent submitted form | Auto |
| `PaperworkComplete` | Forms completed in TherapyNotes | Manual |
| `BookingInviteSent` | Booking message sent | Auto |
| `AssessmentBooked` | Appointment confirmed | Auto |
| `AssessmentDone` | First session complete | Manual |
| `CheckedIn-Today` | Attendance logged | Auto |
| `BodyAndBrain-Daycare` | Enrollment type flag | Auto |

---

### C. Relationships (ERD Summary)

