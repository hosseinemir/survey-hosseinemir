import Image from "next/image";
import { SquestionsT } from "../../types/types";

export default function Questionsmodule({ title, img, answer }: SquestionsT) {
  return (
    <div>
      <p>{title}</p>
      {img ? <Image src={img} alt="" /> : null}
      <div>
        {answer.map((item) => (
          <input type="checkbox" key={item.id} name={item.title} />
        ))}
        <input type="checkbox" name="" id="" />
      </div>
    </div>
  );
}
