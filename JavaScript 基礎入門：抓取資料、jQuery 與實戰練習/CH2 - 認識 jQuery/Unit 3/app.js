$().ready(() => {
  const api =
    "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

  const keyword = $("#searchKeyword"); // please notified that jQuery element != DOM element
  const form = $("#searchForm");

  form.submit((e) => {
    e.preventDefault();

    const query = keyword.val(); // val() returns the value of the element with trim()

    if (query != "") {
      $.ajax({ url: api }).done((sites) => {
        const siteList = $(".siteList"); // use . to search class-item

        siteList.html("");

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

            siteList.append(item); // "beforeend" 表放在此tag結束前
          });
      });
    }
  });
});
