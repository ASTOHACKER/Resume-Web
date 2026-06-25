<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Resume & Portfolio Web Application - Agent Instructions

เอกสารนี้ระบุหลักเกณฑ์การพัฒนา กฎเกณฑ์โครงสร้างโค้ด และแนวทางการออกแบบสำหรับ AI Agent ทุกตัวที่เข้ามาทำงานในโปรเจกต์ **Resume Web** ของคุณ**นฤดม โอกาศ (Narudom O-kart)**

---

## 🚀 Project Overview & Stack

- **Developer Profile:** นฤดม โอกาศ (Narudom O-kart) - นักศึกษาเทคโนโลยีสารสนเทศ (IT) มหาวิทยาลัยสงขลานครินทร์ (PSU)
- **Framework:** Next.js 16.2.9 (App Router)
- **UI & Core:** React 19.2.4, TypeScript, Tailwind CSS v4
- **Animations:** Framer Motion (`framer-motion`)
- **Icons:** Lucide React (`lucide-react`)
- **Fonts:**
  - Thai/Latin Display: **Prompt** (`var(--font-prompt)`)
  - Latin Body: **Outfit** (`var(--font-outfit)`)

---

## 🎨 Theme & Design System (Tailwind CSS v4)

โปรเจกต์นี้ใช้ **Tailwind CSS v4** ร่วมกับ CSS Variables สำหรับการทำ Light/Dark Theme โดยใช้สไตล์แนว Modern Glassmorphism และ Dark-centric เป็นหลัก

### 1. Color Palette (CSS Variables ใน `src/app/globals.css`)
- **Background (`--color-background`):** 
  - Dark Mode: `#09090b`
  - Light Mode: `#f8fafc`
- **Foreground (`--color-foreground`):** 
  - Dark Mode: `#f4f4f5`
  - Light Mode: `#0f172a`
- **Primary Color (`--color-primary`):**
  - Dark Mode: Indigo `#6366f1` (Hover: `#4f46e5`)
  - Light Mode: Indigo `#4f46e5` (Hover: `#4338ca`)
- **Accent Color (`--color-accent`):** Emerald `#10b981` (Light: `#059669`)

### 2. Glassmorphism Utilities
สำหรับ Panel และ Card ที่ต้องการความเป็นกระจกโปร่งแสง ให้ใช้คลาส `.glass-panel` ซึ่งมีสไตล์รองรับทั้ง Dark และ Light mode อัตโนมัติ:
```tsx
<div className="glass-panel rounded-2xl p-6">
  {/* Content */}
</div>
```

### 3. Fonts
- ตัวอักษรทั่วไปใช้ Class `font-sans` ซึ่งจะดึงค่าเป็น `var(--font-outfit)` คู่กับ `var(--font-prompt)`
- สำหรับส่วนหัวเรื่องใหญ่ ๆ หรือเน้นน้ำหนักไทยให้ใช้ `font-display`

---

## ⚙️ Coding Standards & Development Guidelines

AI Agent ทุกตัวต้องปฏิบัติตามมาตรฐานนี้อย่างเคร่งครัด:

### 1. Server vs. Client Components (React 19 & Next.js 16)
- **Client Components:** ต้องระบุ `"use client"` ไว้บรรทัดแรกสุดของไฟล์เสมอ หากใช้ React Hooks (`useState`, `useEffect`, `useContext`, `useRef`) หรือการทำ Animation ร่วมกับ Framer Motion
- **Server Components:** ใช้สำหรับ Component ที่โหลดข้อมูลหรือเป็นโครงสร้าง Layout หลักที่ไม่มี Interactive Logic เพื่อประสิทธิภาพสูงสุด

### 2. TypeScript Strict Mode
- หลีกเลี่ยงการใช้ `any` ทุกกรณี
- กำหนด Type ของ Props และ State อย่างชัดเจน เช่น:
  ```typescript
  interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    demoUrl?: string;
  }
  ```

### 3. Responsive Web Design
- ออกแบบหน้าเว็บด้วยแนวคิด **Mobile-First** เสมอ
- หน้าจอต้องแสดงผลได้อย่างสวยงาม ครบถ้วน และไม่มี Layout แตกบนอุปกรณ์ทุกขนาด (Mobile, Tablet, Desktop)
- ทดสอบ Flexbox/Grid และ Spacing ทุกครั้งเพื่อให้ยืดหยุ่น

### 4. Animations with Framer Motion
- ใช้ Framer Motion เพื่อสร้าง Micro-interactions และความสั่นไหวที่นุ่มนวล
- หลีกเลี่ยงอนิเมชันที่เร็วเกินไปหรือเคลื่อนไหวมากเกินไปจนรบกวนการอ่านเนื้อหา
- ตั้งค่า Transition ที่นุ่มนวล (เช่น `type: "spring", stiffness: 100, damping: 15` หรือ `ease: "easeInOut"`)

### 5. Print Layout Optimization (เรซูเม่สำหรับการพิมพ์)
เนื่องจากเว็บนี้เป็นเรซูเม่ส่วนตัว ซึ่งผู้ใช้อาจกดสั่งพิมพ์ (Ctrl+P) เป็น PDF เพื่อใช้สมัครงาน:
- ใช้องค์ประกอบที่มี Class `.no-print` สำหรับสิ่งที่ไม่จำเป็นตอนพิมพ์ เช่น ปุ่มกด, แถบนำทาง (Navbar), แชทบอท (AIChatbot), ปุ่มสลับธีม
- ใช้คลาส `.print-card` และ `.print-divider` ในส่วนของ Experience/Education เพื่อให้แสดงผลจัดหน้ากระดาษอย่างเป็นระเบียบเมื่อสั่งพิมพ์

---

## 🛠️ Commands

- **Start Development Server:** `npm run dev`
- **Build Production Bundle:** `npm run build`
- **Run Linter:** `npm run lint`

*หมายเหตุ: ก่อนจะส่งงานหรือตอบกลับความสำเร็จของงาน Agent ควรตรวจสอบด้วยคำสั่ง `npm run build` หรือ `npm run lint` เพื่อให้แน่ใจว่าโปรเจกต์ไม่มีข้อผิดพลาดทางเทคนิค*
