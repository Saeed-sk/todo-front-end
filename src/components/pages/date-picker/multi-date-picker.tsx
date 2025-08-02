import {Calendar} from "react-multi-date-picker"


export function MultiDatePicker() {
    return (
        <Calendar
            className="!border-none w-full !bg-gray-600/50 drop-shadow-sm drop-shadow-amber-100 backdrop-blur-lg p-4 !rounded-lg"
            shadow={false}
            disableYearPicker={true}
            format="YYYY/MM/DD"
            range={true}
            mapDays={({date, today, currentMonth, isSameDate}) => {
                let classes = [
                    "!rounded-[5px] !text-14 ",
                    date.month.index === currentMonth.index ? "bg-gray-500 " : "",
                ];
                if (isSameDate(date, today)) {
                    classes.push("");
                }

                if (date.weekDay.index === 6) {
                    classes.push('!bg-[#0892DC] text-white');
                }

                return {
                    className: classes.join(" "),
                };
            }}
        />
    )
}