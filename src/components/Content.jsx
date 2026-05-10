const Content = () => {
  return (
    <>
    <div className="flex items-center justify-center gap-2 mt-16">
        <input type="text" 
            placeholder="상품 검색..." 
            className="w-96 border border-gray-300 px-3 py-2 text-sm rounded-md" />
        <button 
            className="px-10 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-500">
                검색</button>
    </div>
    <div className="flex flex-col items-center justify-center mt-20">
        <img src="/gdg-logo.svg" alt="GDG Logo" className="w-50 opacity-30"/>
        <p className="mt-4 text-gray-400 text-sm">검색 결과가 없습니다.</p>
    </div>
    </>
  )
}

export default Content;