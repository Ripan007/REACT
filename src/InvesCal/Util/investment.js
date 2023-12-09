export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedResult,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;
  for (let i = 0; i < duration.length; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
    });
  }
  return annualData;
}

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,maximumFractionDigits:0
});
