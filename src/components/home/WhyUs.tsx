import React from "react";

function WhyUs() {
  const skills = [
    { label: "BUILD QUALITY", percentage: 90, color: "bg-[#FF0000]" },
    { label: "LENS KIT", percentage: 78, color: "bg-[#FACC15]" },
    { label: "CAMERA STRAP", percentage: 86, color: "bg-[#FF0000]" },
  ];

  return (
    <section className="bg-white py-16 md:py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT SIDE: TEXT CONTENT */}
        <div className="space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1.5 rounded-full inline-block mb-4">
              Why Choose Us
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Crafted for Photographers,
              <br className="hidden sm:inline" />
              <span className="text-gray-500">Built for Precision.</span>
            </h2>

            <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
              We provide professional creators with top-tier camera technology,
              unmatched expert guidance, and seamless service every step of the
              way.
            </p>
          </div>

          {/* PROGRESS BARS */}
          <div className="space-y-6 pt-4">
            {skills.map((skill) => (
              <div key={skill.label} className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold tracking-widest text-gray-800 uppercase">
                  <span>{skill.label}</span>
                  <span>{skill.percentage}%</span>
                </div>

                <div className="w-full bg-[#eaeaea] h-1.5 overflow-hidden">
                  <div
                    className={`${skill.color} h-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: CIRCULAR CAMERA APERTURE IMAGE */}
        <div className="relative">
          <img
            src="/home/whyus.jpg"
            alt="Why Us"
            className="h-[500px] w-[500px] rounded-full object-cover"
          />
          <div className="absolute top-38 left-38 h-50 bg-white border-5 border-[#FF0000] w-50 rounded-full"></div>
          <img src="/camera-icons/5.png" alt="" className="absolute top-48 left-48 h-30 bg-white w-30" />
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
