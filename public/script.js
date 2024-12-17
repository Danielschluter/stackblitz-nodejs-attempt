async function fetchData() {
  try {
    const response = await fetch('/data');
    const data = await response.json();

    const operatingIncomeData = data.operatingIncome.data;
    const netIncomeData = data.netIncome.data;

    const tableBody = document.querySelector('#data-table tbody');

    operatingIncomeData.forEach((operating) => {
      const netIncomeEntry = netIncomeData.find(
        (net) => net.cik === operating.cik
      ) || { val: 'N/A' };

      const row = document.createElement('tr');
      row.innerHTML = `
              <td>${operating.entityName}</td>
              <td>${operating.val.toLocaleString()}</td>
              <td>${netIncomeEntry.val.toLocaleString()}</td>
          `;
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error('Error fetching data', error);
  }
}

document.addEventListener('DOMContentLoaded', fetchData);
