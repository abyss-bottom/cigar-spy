import service from "@/http/request";



export function getBrandData(brand_type) {
    return service({
        method: "POST",
        url: "tanjia/cigar/brand/list",
        data: {"type": brand_type},
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

export function getBrandDesc(brand_id) {
    return service({
        method: "POST",
        url: "tanjia/brand/desc",
        data: {"id": brand_id},
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

export function getBrandDetail(brand_id) {
    return service({
        method: "POST",
        url: "tanjia/brand/detail/list",
        data: {"id": brand_id},
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

export function getCategoryIntro(category_id) {
    return service({
        method: "POST",
        url: "tanjia/category/intro",
        data: {"id": category_id},
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

export function getCategoryCigarData(category_id) {
    return service({
        method: "POST",
        url: "tanjia/category/cigar/list",
        data: {"id": category_id},
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

export function getCigarRecommend() {
    return service({
        method: "POST",
        url: "tanjia/cigar/recommend/list",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}