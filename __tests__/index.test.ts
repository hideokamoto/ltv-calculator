
import {
    LTVCalculator
} from '../libs/index'

describe('LTVCalculator', () => {
    let client = new LTVCalculator()
    describe('LTV', () => {
        beforeEach(() => client = new LTVCalculator())
        it('If Sales is 100, User is 10, and Churn rate is 10%. The LTV is 100', () => {
            const arpu = client.calcARPU(100, 10)
                .calcAverageDurationByChurnRate(10)
                .getLTV()
            expect(arpu).toEqual(100)
        })
    })
    describe('ARPU', () => {
        beforeEach(() => client = new LTVCalculator())
        it('If Sales is 100 and User number is 10, the ARPU should be 10', () => {
            const arpu = client.calcARPU(100, 10).getARPU()
            expect(arpu).toEqual(10)
        })
        it('If Sales is 100 and User number is 10, the ARPU should be 10', () => {
            const arpu = client.getARPU(100, 10)
            expect(arpu).toEqual(10)
        })
    })
    describe('Average Duration', () => {
        beforeEach(() => client = new LTVCalculator())
        it('If churn rate is 10%, The average duration should be 10', () => {
            const averageDuration = client.calcAverageDurationByChurnRate(10)
                .getAverageDurationByChurnRate()
            expect(averageDuration).toEqual(10)
        })
        it('If churn rate is 10%, The average duration should be 10', () => {
            const averageDuration = client.calcAverageDurationByChurnRate(10, 'percentage')
                .getAverageDurationByChurnRate()
            expect(averageDuration).toEqual(10)
        })
        it('If churn rate is 0.1, The average duration should be 10', () => {
            const averageDuration = client.calcAverageDurationByChurnRate(0.1, 'number')
                .getAverageDurationByChurnRate()
            expect(averageDuration).toEqual(10)
        })
        it('If churn rate is 10%, The average duration should be 10', () => {
            const averageDuration = client.getAverageDurationByChurnRate(10)
            expect(averageDuration).toEqual(10)
        })
        it('If churn rate is 10%, The average duration should be 10', () => {
            const averageDuration = client.getAverageDurationByChurnRate(10, 'percentage')
            expect(averageDuration).toEqual(10)
        })
        it('If churn rate is 0.1, The average duration should be 10', () => {
            const averageDuration = client.getAverageDurationByChurnRate(0.1, 'number')
            expect(averageDuration).toEqual(10)
        })
    })
})
