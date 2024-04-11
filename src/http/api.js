import service from "@/http/request";



export function getBrandData(brand_type) {
    return service({
        method: "POST",
        url: "cigar/brand/list",
        data: {"type": brand_type},
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}