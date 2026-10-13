import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
          <div className="shrink-0">
            <Image
              src="/profile.jpg"
              alt="Moid Uddin"
              width={160}
              height={160}
              className="rounded-full shadow-lg border-4 border-white object-cover"
              priority
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
              MOID UDDIN
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-4">
              AI & Web Developer
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                moiduddin990@gmail.com
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                0300-2977077
              </span>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-200 pb-2">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <p><strong>Date of Birth:</strong>30-August-1999</p>
            <p><strong>Gender:</strong> Male</p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'JavaScript', 'Python'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">{skill}</span>
                ))}
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {['HTML5', 'CSS3', 'React.js', 'Next.js'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">{skill}</span>
                ))}
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {['FastAPI', 'REST APIs', 'JWT Authentication', 'Express.js'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">{skill}</span>
                ))}
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                AI & Automation
              </h3>
              <div className="flex flex-wrap gap-2">
                {['OpenAI Agent SDK', 'Prompt Engineering', 'AI Agent Development'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium">{skill}</span>
                ))}
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 md:col-span-2">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
                Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'Docker (Basic)'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">{skill}</span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Education & Coursework Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <section>
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-200 pb-2">Education</h2>
            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white bg-slate-300 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-slate-200 bg-white shadow-sm">
                  <h3 className="font-bold text-gray-900">A-Levels</h3>
                  <p className="text-sm text-gray-600">Pre-Engineering</p>
                </div>
              </div>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white bg-slate-300 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-slate-200 bg-white shadow-sm">
                  <h3 className="font-bold text-gray-900">O-Levels</h3>
                  <p className="text-sm text-gray-600">Science</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-200 pb-2">Coursework</h2>
            <ul className="space-y-3">
              {[
                'TypeScript & Modern JavaScript',
                'Next.js (Full Stack Web Development)',
                'Python Programming',
                'OpenAI Agent SDK (AI Agents & Automation)',
                'FastAPI (Backend API Development)'
              ].map((course, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span className="text-gray-700">{course}</span>
                </li>
              ))}
            </ul>
          </section>

        </div>

      </main>
    </div>
  );
}
