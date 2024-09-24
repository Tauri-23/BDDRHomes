/**
 * 
 * @param {number} principal 
 * @param {number} term 
 * @param {number} term_additional_months 
 * @param {number} interest_rate 
 * @returns 
 */
export const calcMonthlyAmort = (principal, term, term_additional_months, interest_rate) => {
    const r = interest_rate / 12 / 100 // Monthly Interest Rate
    const n = (term * 12) + term_additional_months // Total number of months

    const M = (principal * r * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1); //Monthly Amort

    return M;
}