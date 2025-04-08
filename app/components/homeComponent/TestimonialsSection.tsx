import { what_our_users_say } from "../../data/data";

export const TestimonialsSection = () => (
  <section className="h-auto w-full flex justify-center items-center relative transition: duration-300 ease-linear overflow-hidden backdrop:blur-2xl bg-rgba(0, 0, 0, 0.8) border-b-1 border-orange-500">
    <h2 className="text-2xl text-center absolute text-orange-500">
      Our Clients Remark
    </h2>
    <main className="h-125 flex justify-evenly items-center flex-wrap overflow-x-hidden relative">
      <section className="w-[500%] h-full flex justify-evenly items-center transition:duration-500 ease-linear">
        {what_our_users_say.map((el, id) => {
          return (
            <div key={id} className="user_comment_holder">
              <div className="user_comment_card">
                <div className="quote_top">‟</div>
                <div className="user_img">
                  {/* <div
                    style={{ backgroundImage: `url(${el.img})` }}
                    className="slider_img"
                  ></div> */}
                  <h3>{el.userName}</h3>
                </div>
                <p>{el.message}</p>
                <div className="quote_bottom">„</div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
    <div className="absolute font-bold bottom-[35%] text-2xl bg-rgba(0, 0, 0, 0.164) text-white p-2.5 rounded-full w-[60px] h-[60px] flex justify-center items-center cursor-pointer left-[2%]">
      ←
    </div>
    <div className="absolute font-bold bottom-[35%] text-2xl bg-rgba(0, 0, 0, 0.164) text-white p-2.5 rounded-full w-[60px] h-[60px] flex justify-center items-center cursor-pointer right-[2%]">
      →
    </div>
  </section>
);
