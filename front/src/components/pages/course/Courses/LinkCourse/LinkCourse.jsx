import Link from "next/link";
import s from "./linkCourse.module.scss";

export default function LinkCourse() {
  return (
    <Link
      href="/course"
      className={s.button}
      aria-label="Посилання на сторінку курсу"
    >
      <svg className={s.link_icon}>
        <use href="/icons/sprite.svg#arrow-up-to-right"></use>
      </svg>
    </Link>
  );
}
