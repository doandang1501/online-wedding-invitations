# Thiệp Cưới — Phương Anh & Minh Tuấn

Website thiệp mời cưới online — **Next.js (App Router) + TypeScript**, static-prerendered, deploy trực tiếp lên **Vercel** (không cần backend riêng).

- **Ngày:** 25.10.2026 · 17:00
- **Địa điểm:** Nhà hàng Monami

---

## 1. Yêu cầu môi trường

| Công cụ | Phiên bản |
|---|---|
| Node.js | >= 18.18 (khuyến nghị 20+) |
| npm | >= 9 |

Kiểm tra:

```bash
node -v
npm -v
```

---

## 2. Chạy project ở local

```bash
# 1. Cài dependencies
npm install

# 2. Chạy dev server
npm run dev
```

Mở trình duyệt tại **http://localhost:3000**

### Build production

```bash
# Build
npm run build

# Chạy bản production local
npm run start
```

> `npm run build` phải chạy sạch (không TypeScript / build error) trước khi deploy.

---

## 3. Cấu trúc project

```text
src/
├── app/
│   ├── layout.tsx            # metadata, fonts, html shell
│   ├── page.tsx              # ghép các section
│   ├── globals.css           # design tokens + base styles
│   └── sections.css          # style từng section
├── components/
│   ├── Hero/                 # Hero frame
│   ├── CoupleSection/        # Cô dâu & chú rể
│   ├── WeddingDate/          # Ngày cưới + countdown
│   ├── InvitationMessage/    # Lời nhắn
│   ├── Gallery/              # Grid ảnh + mở lightbox
│   ├── Lightbox/             # Lightbox (ESC / ← → / click-outside)
│   ├── Location/             # Venue + nút Google Maps
│   ├── FinalSection/         # Câu kết
│   ├── MusicToggle/          # Nút nhạc nền
│   ├── Countdown/            # Đếm ngược
│   └── Photo.tsx             # Ảnh thật hoặc placeholder block
├── data/
│   └── wedding.ts            # ← TOÀN BỘ nội dung chỉnh ở đây
└── lib/
    └── Reveal.tsx            # scroll-reveal animation
public/
├── images/wedding/           # thả ảnh cưới .webp vào đây
└── music/                    # thả file nhạc .mp3 vào đây
```

---

## 4. Chỉnh sửa nội dung (không cần đụng UI)

Mọi nội dung nằm trong **[`src/data/wedding.ts`](src/data/wedding.ts)**:

```ts
export const wedding = {
  bride: "Phương Anh",
  groom: "Minh Tuấn",
  date: "25.10.2026",
  time: "17:00",
  venue: {
    name: "Nhà hàng Monami",
    address: "",          // ← điền địa chỉ
    mapsUrl: "",          // ← dán link Google Maps
  },
  message: `...`,         // lời nhắn (giữ nguyên xuống dòng)
  gallery: [ ... ],       // danh sách ảnh
};

export const features = {
  music: true,            // bật/tắt nút nhạc
  countdown: true,        // bật/tắt countdown
  galleryLightbox: true,  // bật/tắt lightbox
};
```

### Thay ảnh cưới thật

1. Đổi tên ảnh thành `hero.webp`, `01.webp`, `02.webp` …
2. Copy vào `public/images/wedding/`
3. Đường dẫn trong `wedding.ts` đã trỏ sẵn `/images/wedding/01.webp` — **chỉ cần trùng tên file là ảnh tự hiện** (placeholder block biến mất).

> Nên dùng `.webp` (hoặc `.jpg`) kích thước ~1600px cạnh dài, < 500KB/ảnh.

### Thêm nhạc nền

Đặt file `wedding.mp3` vào `public/music/` → sửa `wedding.music.src` nếu tên khác. Nhạc **không autoplay** — khách bấm nút tròn góc phải để bật/tắt.

---

## 5. Deploy lên Vercel qua GitHub

### Bước 1 — Đưa code lên GitHub

```bash
# Khởi tạo git (nếu chưa)
git init
git add .
git commit -m "Wedding invitation site"

# Tạo repo trên github.com trước, rồi:
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

### Bước 2 — Import vào Vercel

1. Vào **[vercel.com](https://vercel.com)** → đăng nhập bằng GitHub.
2. Chọn **Add New → Project**.
3. **Import** repository vừa push.
4. Vercel tự nhận diện **Next.js** — giữ nguyên mặc định:
   - Framework Preset: `Next.js`
   - Build Command: `next build`
   - Output Directory: `.next`
5. Bấm **Deploy**.

⏱ ~1 phút → website live tại `https://<project>.vercel.app`.

### Bước 3 — Deploy tự động

Sau lần đầu, **mỗi lần `git push` lên `main` → Vercel tự build & deploy** lại. Pull request sẽ có Preview URL riêng.

```bash
git add .
git commit -m "Update photos"
git push        # Vercel tự deploy
```

### Custom domain (tuỳ chọn)

Vercel → Project → **Settings → Domains** → Add domain → trỏ DNS theo hướng dẫn (A record `76.76.21.21` hoặc CNAME `cname.vercel-dns.com`).

---

## 6. Checklist trước khi deploy

- [ ] `npm run build` chạy sạch local
- [ ] Đã điền `venue.address` + `venue.mapsUrl`
- [ ] Đã thay ảnh thật vào `public/images/wedding/`
- [ ] Đã thêm `public/music/wedding.mp3` (hoặc tắt `features.music`)
- [ ] Test mobile (Chrome DevTools → 390px) không bị tràn ngang
- [ ] Lightbox đóng bằng ESC

---

## 7. Troubleshooting

| Lỗi | Cách xử lý |
|---|---|
| `npm: command not found` | Cài Node.js từ [nodejs.org](https://nodejs.org) |
| Build fail: font subset | Đảm bảo `layout.tsx` chỉ dùng subset hợp lệ |
| Ảnh không hiện | Kiểm tra tên file trùng `/images/wedding/xx.webp` & nằm đúng `public/` |
| Nhạc không phát | Browser chặn autoplay — khách phải bấm nút (đúng thiết kế) |
| Deploy Vercel lỗi | Xem log trong Vercel dashboard → thường do `npm run build` fail local trước |

---

**Tech:** Next.js 15 · React 19 · TypeScript · Static prerender · Vercel-ready
