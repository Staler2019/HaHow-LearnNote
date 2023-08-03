document.addEventListener("DOMContentLoaded", () => {
  const api =
    "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

  const keyword = document.querySelector("#searchKeyword"); // use # to search id-item
  const form = document.querySelector("#searchForm");
  form.addEventListener("submit", (e) => {
    // 預設為繳交並跳轉網頁，會變成reload網頁
    e.preventDefault();

    const query = keyword.value.trim();

    if (query != "") {
      fetch(api)
        .then((resp) => {
          return resp.json();
        })
        .then((sites) => {
          const siteList = document.querySelector(".siteList"); // use . to search class-item
          siteList.innerHTML = "";
          // console.log(sites)

          // 過濾functions: map, reduce, filter, find, ...
          // 符合條件的元素取出
          //   const r = sites.filter((site) => {
          //     return site.ar.includes(query); // site.ar: address
          //   });

          //   console.log(r);
          sites
            .filter((site) => {
              return site.ar.includes(query); // site.ar: address
            })
            .forEach((site) => {
              const item = `
                <li class="list-group-item fs-5">
                    <i class="fas fa-bicycle"></i>
                    ${site.sna.replace("YouBike2.0_", "")} (${site.sbi})<br>
                    <small class="text-muted">${site.ar}</small>
                </li>`;
              // site.sna: station name
              // site.sbi: station's car count

              siteList.insertAdjacentHTML("beforeend", item); // "beforeend" 表放在此tag結束前
            });
        });
    }
  });
});
