export const features = {
  music: true,
  countdown: true,
  galleryLightbox: true,
} as const;

export interface GalleryItem {
  src: string;
  alt: string;
  /**
   * Optional solid warm tone used while the real photo is not yet provided.
   * Rendered as a colored block so the layout is visible before client images arrive.
   */
  tone?: "cream" | "beige" | "mocha" | "brown" | "sand";
}

export const wedding = {
  bride: "Phương Anh",
  groom: "Minh Tuấn",
  coupleLabel: "Wedding Invitation",
  date: "25.10.2026",
  dateISO: "2026-10-25",
  time: "17:00",
  datetimeISO: "2026-10-25T17:00:00+07:00", // Asia/Ho_Chi_Minh
  venue: {
    name: "Nhà hàng Monami",
    short: "Monami",
    address: "", // client provides later
    mapsUrl: "", // configure Google Maps link here
  },
  message: `Hiii^^!!! Cuối cùng thì ngày này cũng tới!

Phương Anh & Minh Tuấn chính thức "về chung một nhà".

Chúng mình rất mong sự có mặt của bạn trong ngày vui này để cùng tụi mình lưu giữ những khoảnh khắc đáng nhớ nhất.

Hẹn gặp bạn vào lúc 17h ngày 25/10/2026 tại nhà hàng Monami.`,
  closing: "See you on our special day.",
  hero: { src: "/images/wedding/bride.jpg", alt: "Phương Anh và Minh Tuấn" },
  couple: {
    bride: { src: "/images/wedding/bride.jpg", alt: "Cô dâu Phương Anh" },
    groom: { src: "/images/wedding/groom.jpg", alt: "Chú rể Minh Tuấn" },
  },
  gallery: [
    { src: "/images/wedding/ga_1.jpg", alt: "Khoảnh khắc của Phương Anh & Minh Tuấn" },
    { src: "/images/wedding/ga_2.jpg", alt: "Khoảnh khắc của Phương Anh & Minh Tuấn" },
    { src: "/images/wedding/ga_3.jpg", alt: "Khoảnh khắc của Phương Anh & Minh Tuấn" },
    { src: "/images/wedding/ga_4.jpg", alt: "Khoảnh khắc của Phương Anh & Minh Tuấn" },
    { src: "/images/wedding/ga_5.jpg", alt: "Khoảnh khắc của Phương Anh & Minh Tuấn" },
    { src: "/images/wedding/ga_6.jpg", alt: "Khoảnh khắc của Phương Anh & Minh Tuấn" },
  ] as GalleryItem[],
  music: {
    src: "/music/wedding.mp3",
  },
} as const;
