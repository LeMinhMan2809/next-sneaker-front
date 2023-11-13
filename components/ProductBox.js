export default function ProductBox({ _id, title, description, price }) {
    return (
        <div className="bg-white">
            <div className="flex justify-center">
                <img className="h-[250px]" src={images[0]}></img>
            </div>

            <div className="text-center pt-8 pb-5 text-xl">
                <p className="">{title}</p>
                <p><span>3.000.000 đ</span></p>
                <button className="p-2 border-2 mt-3 border-black rounded-lg hover:bg-slate-200" >
                    Thêm vào giỏ hàng
                </button>
            </div>
            
        </div>
           
        
    )
}