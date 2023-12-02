import {Html} from '@react-three/drei'

const Loader = () => {
  return (
    <Html>
    <div className='flex justify-center items-center'>
      <div className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin' />
      <h1 className='text-3xl ml-4'>Loading ...</h1>
    </div>
    </Html>
  )
}

export default Loader