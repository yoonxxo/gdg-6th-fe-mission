import Button from "./common/Button";  
import Input from "./common/Input"; 

const Content = () => {
  return (
    <main className="grow w-full flex flex-col">
    <div className="flex gap-3">
        <Input placeholder="상품 검색..." className="flex-1 px-3 py-2"/>
        <Button 
            varients="secondary" className="w-30" >
                검색</Button>
    </div>
    <div className="h-full flex flex-col items-center justify-center">
        <img src="/gdg-logo.svg" alt="GDG Logo" className="w-50 opacity-30"/>
        <p className="text-gray-400 text-sm">검색 결과가 없습니다.</p>
    </div>
    </main>
  )
}

export default Content;