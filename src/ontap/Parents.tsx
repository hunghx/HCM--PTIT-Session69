import { useState } from 'react'
type PropsType = {
  name: string,
  sex: boolean
}

export const Parents = (props: PropsType) => {
  // định nghia 1 props tên là name : string
  // định nghĩa 1 trạng thái tên count : number
  const [count, setCount] = useState<number>(0);
  // count là biến trạng thái
  // setCount là 1 hàm thay đổi trạng thái , nhận vào tham số là trạng thái mới  setCount(10)
  // cách 2 setCount nhận vào 1 hàm callback có 1 tham số là trang thái cũ và phải return trạng thái mới
 
  
  return (
    <div>
      <p>name : {props.name}</p>
      <p>{props.sex ? 'Nam' : 'Nữ'}</p>
      <p>count : {count}</p>
      <input type="text" onKeyUp={()=>console.log('ấn và giữ')} />
      <button onClick={() => setCount((pre) => pre + 10)}>Onclick</button>
    </div>
  )
}
