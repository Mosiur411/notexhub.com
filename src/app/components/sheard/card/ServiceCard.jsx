import { MdOutlineArrowCircleRight } from "react-icons/md";

export default function ServiceCard({ service }) {
  return (
    <div data-aos="fade-up" className="group cursor-pointer transform transition-transform duration-500 hover:scale-105 hover:-rotate-1">
      <div className="relative w-full h-96 border border-white/25 rounded-3xl overflow-hidden bg-gradient-to-br from-[#070707] via-[#111111] to-[#070707] shadow-lg backdrop-blur-sm hover:border-lime-400 hover:shadow-lime-500/60 hover:shadow-lg p-6">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-white/20 opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
          <div
            className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full bg-gradient-to-tr from-white/25 to-transparent blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-900 animate-bounce"
            style={{ animationDelay: '0.4s' }}
          />
          <div className="absolute top-12 left-12 w-16 h-16 rounded-full bg-white/15 blur-lg animate-ping" />
          <div
            className="absolute bottom-20 right-20 w-16 h-16 rounded-full bg-white/15 blur-lg animate-ping"
            style={{ animationDelay: '0.9s' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-64 transition-transform duration-[1300ms]" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center select-none">
          {/* Title - Larger Font */}
          <h2 className="text-3xl font-extrabold text-lime-400 group-hover:text-white transition duration-300 ease-in-out opacity-90 group-hover:opacity-100">
            {service.name}
          </h2>

          {/* Divider */}
          <div className="mt-4 w-1/3 h-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent rounded-full animate-pulse" />

          {/* Service List - Smaller Font */}
          <div className="mt-6 space-y-3 max-w-[280px] text-gray-300 text-xs font-medium">
            {service.serviceList?.map((item, i) => (
              <div
                key={i}
                className="flex items-start  gap-2 hover:text-lime-400 transition duration-300"
              >
                <MdOutlineArrowCircleRight className="mt-1 text-lime-400" />
                <span className="text-base">{item}</span>
              </div>
            ))}
          </div>

          {/* Bounce Dots */}
          <div className="flex space-x-2 mt-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>

        {/* Corner Effects */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
}
