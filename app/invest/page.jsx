import Card from "@/components/Card";
import "./invest.css";
import { BASE_URL } from "@/config/Url";

async function getData() {
  const res = await fetch(BASE_URL + "/bussinesses");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Invest = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div className="pt-20 max-w-[1450px] mx-auto flex flex-col justify-between min-h-screen text-center">
      <div>
        <h1 className="font-bold text-[60px] leading-relaxed">Invest Mate</h1>
        <div className="w-full px-3">
          <div className="searchbar">
            <div className="searchbar-wrapper">
              <div className="searchbar-left">
                <div className="search-icon-wrapper">
                  <span className="search-icon searchbar-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="searchbar-center">
                <div className="searchbar-input-spacer"></div>

                <input
                  type="text"
                  className="searchbar-input"
                  maxLength="2048"
                  name="q"
                  autoCapitalize="off"
                  autoComplete="off"
                  title="Search"
                  // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
                  role="combobox"
                  placeholder="Search Business Name"
                />
              </div>

              <div className="searchbar-right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#777777"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-wrap gap-y-4 justify-between my-4">
          {data.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>

      <div className="w-full flex justify-end mb-20">
        <div className="h-10 w-40 bg-slate-300"></div>
      </div>
    </div>
  );
};

export default Invest;
