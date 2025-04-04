'use client';
export interface ExpI {
  company: string;
  role: string;
  startDate: string;
  endDate:string;
  description: string;
}

export default function Experience(props:{experence:ExpI[]}){
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Work Experience</h2>
      <div className="relative border-l-4 border-black pl-6 space-y-6">
        {props.experence.map((experience, index) => (
          <div key={index} className="relative pb-6">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-black rounded-full"></div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold">{experience.role}</h3>
              <p className="text-gray-600">{experience.company}</p>
              <p className="text-sm text-gray-500 mb-2">{experience.startDate}-{experience.endDate}</p>
              <p className="text-gray-700">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

