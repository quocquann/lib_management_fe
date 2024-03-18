import dayjs from "dayjs"

const formatDate = (date: dayjs.Dayjs): string => {
    return date.format("YYYY-MM-DD")
}

export default formatDate