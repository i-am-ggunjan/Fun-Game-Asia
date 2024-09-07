//! Auth
export const admin_login = 'api/login';

//! Dashboard

//! Master 
//* HSN Code
export const get_hsn_code = 'api/admin/get-hsn-code';
export const create_hsn_code = 'api/admin/create-hsn-code';
export const update_hsn_code = (id) => `api/admin/update-hsn-code/${id}`;
export const delete_hsn_code = (id) => `api/admin/delete-hsn-code/${id}`;
export const get_hsn_code_by_id = (id) => `api/admin/get-hsn-code/${id}`;
export const change_hsn_code_status = (id) => `api/admin/change-hsn-code-status/${id}`;

//* Sale Area
export const get_sale_area = 'api/admin/get-sale-area';
export const create_sale_area = 'api/admin/create-sale-area';
export const update_sale_area = (id) => `api/admin/update-sale-area/${id}`;
export const delete_sale_area = (id) => `api/admin/delete-sale-area/${id}`;
export const get_sale_area_by_id = (id) => `api/admin/get-sale-area/${id}`;
export const change_sale_area_status = (id) => `api/admin/change-sale-area-status/${id}`;

//* Sale Person
export const get_sale_person = 'api/admin/get-sale-person';
export const create_sale_person = 'api/admin/create-sale-person';
export const update_sale_person = (id) => `api/admin/update-sale-person/${id}`;
export const delete_sale_person = (id) => `api/admin/delete-sale-person/${id}`;
export const get_sale_person_by_id = (id) => `api/admin/get-sale-person/${id}`;
export const change_sale_person_status = (id) => `api/admin/change-sale-person-status/${id}`;

//* Item Category
export const get_item_category = 'api/admin/get-item-category';
export const create_item_category = 'api/admin/create-item-category';
export const update_item_category = (id) => `api/admin/update-item-category/${id}`;
export const delete_item_category = (id) => `api/admin/delete-item-category/${id}`;
export const get_item_category_by_id = (id) => `api/admin/get-item-category/${id}`;
export const change_item_category_status = (id) => `api/admin/change-item-category-status/${id}`;

//* Item Packing
export const get_item_packing = 'api/admin/get-item-packing';
export const create_item_packing = 'api/admin/create-item-packing';
export const update_item_packing = (id) => `api/admin/update-item-packing/${id}`;
export const delete_item_packing = (id) => `api/admin/delete-item-packing/${id}`;
export const get_item_packing_by_id = (id) => `api/admin/get-item-packing/${id}`;
export const change_item_packing_status = (id) => `api/admin/change-item-packing-status/${id}`;

//! Setting