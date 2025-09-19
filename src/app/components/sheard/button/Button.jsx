// import Link from "next/link";

// export default function Button({ text, icon, isFill, href, ...res }) {
//     return (
//         <Link href={href ? href : ''}
//             className={` ${isFill ? "bg-[#B9FD50] border border-[#B9FD50] text-black hover:bg-transparent hover:text-[#B9FD50]" : "border border-[#B9FD50] hover:text-black text-[#B9FD50] hover:bg-[#B9FD50]"}     text-center inline-block  transition-all ease-linear duration-100 md:py-[5px] py-1 md:px-[18px] px-3 text-[14px] md:text-base  rounded-full`}
//             {...res}
//         >
//             <span className="relative font-medium flex items-center justify-center gap-1.5">
//                 {icon}
//                 {text}
//             </span>
//         </Link>
//     );
// }

//  new code for showing info
import Link from "next/link";

export default function Button({ text, icon, isFill, href, type = "button", ...res }) {
  const baseClass =
    "text-center inline-block transition-all ease-linear duration-100 md:py-[5px] py-1 md:px-[18px] px-3 text-[14px] md:text-base rounded-full";
  const fillClass = isFill
    ? "bg-[#B9FD50] border border-[#B9FD50] text-black hover:bg-transparent hover:text-[#B9FD50]"
    : "border border-[#B9FD50] hover:text-black text-[#B9FD50] hover:bg-[#B9FD50]";

  const classNames = `${baseClass} ${fillClass}`;

  if (href) {
    // Render as link
    return (
      <Link href={href} className={classNames} {...res}>
        <span className="relative font-medium flex items-center justify-center gap-1.5">
          {icon}
          {text}
        </span>
      </Link>
    );
  }

  // Render as button
  return (
    <button type={type} className={classNames} {...res}>
      <span className="relative font-medium flex items-center justify-center gap-1.5">
        {icon}
        {text}
      </span>
    </button>
  );
}
