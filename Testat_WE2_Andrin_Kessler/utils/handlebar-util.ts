export const helpers = {
    'if_eq': function (a: any, b: any, opts: any) {
        if (a === b)
            return opts.fn(this);
        else
            return opts.inverse(this);
    },

    'get_relative_date': function (date: string) {
        const daysDifference = Math.ceil((new Date(date).getTime() - new Date().getTime()) / (1000 * 3600 * 24));
        return new Intl.RelativeTimeFormat('en', { style: 'short' }).format(daysDifference, 'day');
    },

    'get_nof_lightnings': function (n: number) {
        let lightnings = '';
        for (let i = 0; i < n; i++) {
            lightnings += '&#8623;';
        }
        return lightnings;
    }
}