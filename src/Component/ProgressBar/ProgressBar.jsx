import {
    CircleProgress,
    CircleProgressLine,
    CircleProgressText,
  } from 'keep-react'

function ProgressBar() {
  return (
    <>
    <div className='bg-gradient-to-t from-white to-green-100'>

        <h1 className=" bg-green-400 text-white w-3/6 md:w-2/12 mx-auto items-center py-2 rounded-md text-xl shadow-xl shadow-green-200 text-center">Progress </h1>
        
      <div className="py-5   w-full justify-center align-middle md:flex ">
     

      <CircleProgress className='m-5 w-[80%] md:w-auto' progress={100}>
        <CircleProgressLine className="text-error-50 " strokeColor="text-error-500" />
        <CircleProgressText className="p-10 md:p-0 text-error-500 text-center text-md font-semibold "> HTML 100%</CircleProgressText>
      </CircleProgress>

      <CircleProgress className='m-5 w-[80%] md:w-auto' progress={85}>
        <CircleProgressLine className="text-cyan-100" strokeColor="text-cyan-500" />
        <CircleProgressText className="p-10 md:p-0 text-cyan-500 text-center text-md font-semibold "> CSS 85%</CircleProgressText>
      </CircleProgress>

      <CircleProgress className='m-5 w-[80%] md:w-auto' progress={80}>
        <CircleProgressLine className="text-yellow-100" strokeColor="text-yellow-500" />
        <CircleProgressText className="p-10 md:p-0 text-yellow-500 text-center text-md font-semibold "> JS 80%</CircleProgressText>
      </CircleProgress>

      <CircleProgress className='m-5 w-[80%] md:w-auto' progress={50}>
        <CircleProgressLine className="text-[#407d3831]" strokeColor="text-[#407d38]" />
        <CircleProgressText className="p-10 md:p-0 text-[#407d38] text-center text-md font-semibold "> NODEjs 50%</CircleProgressText>
      </CircleProgress>
      <CircleProgress className='m-5 w-[80%] md:w-auto' progress={60}>
        <CircleProgressLine className="text-[#00ff6a2a]" strokeColor="text-[#00ff69]" />
        <CircleProgressText className=" p-10 md:p-0 text-[#00ff6acd] text-center text-sm font-semibold "> MongoDB 60%</CircleProgressText>
      </CircleProgress>
      </div>
      {/* <LineProgress progress={55}>
        <LineProgressBar lineBackground="bg-error-50" className="bg-error-500" />
        <LineProgressText className="text-error-500">55%</LineProgressText>
      </LineProgress> */}
    </div>
    
    </>
  )
}

export default ProgressBar