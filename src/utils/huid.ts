// HUID format
// from tsoding : https://www.youtube.com/watch?v=QH6KOEVnSZA&t=3411s


export function generateHUID() : string{
    // HUID format: <YEAR><MONTH><DAY>-<HOUR><MINUTE><SECOND>
    const now = new Date();
    const yyyy = now.getFullYear();
    // always 2 digits
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");

    const hh = String(now.getHours()).padStart(2, "0");
    const min = String(now.getMinutes()).padStart(2, "0");
    const ss = String(now.getSeconds()).padStart(2, "0");

    return `${yyyy}${mm}${dd}-${hh}${min}${ss}`;
}