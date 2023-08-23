import React from 'react';
import ReactDOM from 'react-dom';

function Hi() {
  return <div className='w-full max-w-[900px] bg-white shadow-[0px_0px_5px_black] mt-[30px] rounded'> 
    <div className='w-full bg-[#343134] text-white p-[15px]'>
      <h1 className='font-[400] text-[40px]'>Muhammad Hamd</h1>
      <h1 className='text-slate-500 text-[20px] tracking-tight leading-[17px]'>Junior Software Developer</h1>
     <div className='mt-[5px]'>
     <h1 className=' text-[12px]'>Innovative web artisan, weaving ideas into reality with code and creativity. Passionate about crafting exceptional online experiences
</h1>
      <div className='flex gap-[10px] text-[10px] text-slate-500'>
        <h1>Muhammadhamdali572@gmail.com</h1>
        <h1>03251452080</h1>
      </div>
     </div>
    </div>
    <div className='flex'>
      <div className='w-[60%] ml-[15px] p-[20px]'>
        <div>
          <h1 className='font-bold text-slate-700 text-[23px] border-b-4 border-slate-700 w-[110px]'>Education</h1>
          <div className='w-[400px] mt-[15px]'>
            <h1 className='text-slate-500 font-semibold text-[18px] tracking-tight'>Intermediate in Commerce</h1>
           
            <h1 className='font-semibold text-[16px] tracking-tight'>7D Boys Degree College</h1>
            <div className='flex w-[250px]'>
            <div className='text-slate-500 text-[10px] tracking-tight '>7/September/2022 to present</div>
            <div className='text-slate-500 text-[10px] tracking-tight '>Karachi Pakistan</div>
            </div>
            
          </div>
          <div className='w-[400px] mt-[16px]'>
            <h1 className='text-slate-500 font-semibold text-[18px] tracking-tight'>Matriculation in Computer Science</h1>
           
            <h1 className='font-semibold text-[16px] tracking-tight'>North Bright Way Secondary School</h1>
            <div className='flex w-[250px]'>
            <div className='text-slate-500 text-[10px] tracking-tight '>7/September/2022 to present</div>
            <div className='text-slate-500 text-[10px] tracking-tight '>Karachi Pakistan</div>
            </div>
           
          </div>
        </div>
        <div className='mt-[30px]'>
          <h1 className='font-bold text-slate-700 text-[23px] border-b-4 border-slate-700 w-[110px]'>Courses</h1>
          <div className='w-[400px] mt-[15px]'>
            <h1 className='text-slate-500 font-semibold text-[18px] tracking-tight'>Web and Mobile App Development</h1>
           
            <h1 className='font-semibold text-[16px] tracking-tight'>Saylani Mass IT Training</h1>
            
            <div className='flex w-[250px]'>
            <div className='text-slate-500 text-[10px] tracking-tight '>7/September/2022 - present</div>
            <div className='text-slate-500 text-[10px] tracking-tight '>Karachi Pakistan</div>
            </div>
            
          </div>
          <div className='w-[400px] mt-[16px]'>
            <h1 className='text-slate-500 font-semibold text-[18px] tracking-tight'>Web designing</h1>
           
            <h1 className='font-semibold text-[16px] tracking-tight'>Coursera.com</h1>
            <div className='flex w-[250px]'>
            <div className='text-slate-500 text-[10px] tracking-tight '>07/2022 - 09/2022,</div>
            </div>
           
          </div>
          <div className='w-[400px] mt-[16px]'>
            <h1 className='text-slate-500 font-semibold text-[18px] tracking-tight'>Graphic Design Course: Canva</h1>
           
            <h1 className='font-semibold text-[16px] tracking-tight'>Self-Taught through Online Resources
</h1>
            <div className='flex w-[250px]'>
            <div className='text-slate-500 text-[10px] tracking-tight '>2020,
</div>
            </div>
           
          </div>
          <div className='w-[400px] mt-[16px]'>
            <h1 className='text-slate-500 font-semibold text-[18px] tracking-tight'>Figma (Basic)</h1>
           
            <h1 className='font-semibold text-[16px] tracking-tight'>Self-Taught through Online Resources
</h1>
            <div className='flex w-[250px]'>
           
            </div>
           
          </div>
          <div className='w-[400px] mt-[16px]'>
            <h1 className='text-slate-500 font-semibold text-[18px] tracking-tight'>Algorithms and Data Structures</h1>
           
            <h1 className='font-semibold text-[16px] tracking-tight'>Self-Taught through Online Resource
</h1>
            <div className='flex w-[250px]'>
            <div className='text-slate-500 text-[10px] tracking-tight '>03/2023 - Present,

</div>
            </div>
           
          </div>
        </div>
     
      </div>
      <div className='w-[40%] p-[20px]'>
     <div>
          <h1 className='font-bold text-slate-700 text-[23px] border-b-4 border-slate-700 w-[60px]'>Skills</h1>
          <div className='flex flex-wrap gap-[10px] mt-[15px]'>
          <div className='flex flex-wrap'>
            <div className='px-[7px] py-[5px] rounded text-white bg-[#32373b73] text-[12px] font-semibold'>HTML5</div>
          </div>
          <div className='flex flex-wrap'>
            <div className='px-[7px] py-[5px] rounded text-white bg-[#32373b73] text-[12px] font-semibold'>HTML5</div>
          </div>
          <div className='flex flex-wrap'>
            <div className='px-[7px] py-[5px] rounded text-white bg-[#32373b73] text-[12px] font-semibold'>ES6</div>
          </div>
          <div className='flex flex-wrap'>
            <div className='px-[7px] py-[5px] rounded text-white bg-[#32373b73] text-[12px] font-semibold'>CSS3</div>
          </div>
          <div className='flex flex-wrap'>
            <div className='px-[7px] py-[5px] rounded text-white bg-[#32373b73] text-[12px] font-semibold'>MongoDB</div>
          </div>
          <div className='flex flex-wrap'>
            <div className='px-[7px] py-[5px] rounded text-white bg-[#32373b73] text-[12px] font-semibold'>FireBase</div>
          </div>
          <div className='flex flex-wrap'>
            <div className='px-[7px] py-[5px] rounded text-white bg-[#32373b73] text-[12px] font-semibold'>React.js</div>
          </div>
          <div className='flex flex-wrap'>
            <div className='px-[7px] py-[5px] rounded text-white bg-[#32373b73] text-[12px] font-semibold'>Node.js</div>
          </div>
          <div className='flex flex-wrap'>
            <div className='px-[7px] py-[5px] rounded text-white bg-[#32373b73] text-[12px] font-semibold'>Tailwind</div>
          </div>
          <div className='flex flex-wrap'>
            <div className='px-[7px] py-[5px] rounded text-white bg-[#32373b73] text-[12px] font-semibold'>BootStrap</div>
          </div>
          <div className='flex flex-wrap'>
            <div className='px-[7px] py-[5px] rounded text-white bg-[#32373b73] text-[12px] font-semibold'>Git</div>
          </div>
          <div className='flex flex-wrap'>
            <div className='px-[7px] py-[5px] rounded text-white bg-[#32373b73] text-[12px] font-semibold'>Github</div>
          </div>
          <div className='flex flex-wrap'>
            <div className='px-[7px] py-[5px] rounded text-white bg-[#32373b73] text-[12px] font-semibold'>Node.js</div>
          </div>
          <div className='flex flex-wrap'>
            <div className='px-[7px] py-[5px] rounded text-white bg-[#32373b73] text-[12px] font-semibold'>Canva</div>
          </div>
          <div className='flex flex-wrap'>
            <div className='px-[7px] py-[5px] rounded text-white bg-[#32373b73] text-[12px] font-semibold'>Figma</div>
          </div>
          </div>
        </div>

      <div className='mt-[30px]'>
          <h1 className='font-bold text-slate-700 text-[23px] border-b-4 border-slate-700 w-[150px]'>CERTIFICATES</h1>
          <div className='w-full mt-[15px]'>
            <h1 className=' font-semibold text-[15px] tracking-tight'>Certified in ES6 CodeCamp course</h1>
            <div className='text-[12px] text-slate-500'>
            Certified in ES6 CodeCamp course: Mastering modern JavaScript with ES6 features for efficient web development. 
            </div>
            
          </div>
          <div className='w-full mt-[15px]'>
            <h1 className=' font-semibold text-[15px] tracking-tight'>Certified in Responsive Website CodeCamp course</h1>
            <div className='text-[12px] text-slate-500'>
            Certified in Responsive Website CodeCamp course: Expert in building adaptable and mobile-friendly websites for optimal user experience.

            </div>
            
          </div>
        </div>

        <div className='mt-[30px]'>
          <h1 className='font-bold text-slate-700 text-[23px] border-b-4 border-slate-700 w-[120px] '>Languages</h1>
          <div className='w-full mt-[15px]'>
            <h1 className=' font-bold text-[15px] tracking-tight'>URDU</h1>
            <div className='text-[12px] text-slate-500'>
            Native or Bilingual Proficiency
            </div>
            
          </div>
          <div className='w-full mt-[15px]'>
            <h1 className=' font-bold text-[15px] tracking-tight'>English</h1>
            <div className='text-[12px] text-slate-500'>
            Professional Working Proficiency


            </div>
            
          </div>
        </div>
      </div>

    </div>
  </div>;
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));