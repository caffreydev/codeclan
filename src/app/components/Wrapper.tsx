export default function Wrapper({children }: any) {
    return (
      <div className='mx-auto px-4 max-w-[87rem] w-full'>
          { children }
      </div>
    )
  }