export interface page{
	id?: string | number
	module?: string
	key?: string
	name?: string
	icon?: string
	pos?: number
	path?: string[]
	query?: any
	in_menu?: boolean
	auth?: boolean
	is_active?: boolean
}

export interface module{
	id?: string | number
	key?: string
	name?: string
	icon?: string
	pos?: number
	path?: string[]
	query?: any
	auth?: boolean
	is_active?: boolean
}

export interface customer{
	id?: string | number
	name?: string
	type?: 'person' | 'business' | 'all'
	created_date?: string
	created_by?: number
	is_active?: boolean
}

export interface project{
	id?: number
	customer_id?: number | string
	code?: string
	name?: string
	type?: string
	created_date?: string
	created_by?: number
	status?: string
	deadline?: string
	start_time?: string
	end_time?: string
	duration?: string
	is_active?: boolean
}

export interface task{
	id?: string | number
	project_id?: string | number
	name?: string
	type?: 'group' | 'task' | 'subtask'
	parent?: number | string
	pos?: number | string
	created_date?: string
	created_by?: string | number
	status?: string
	deadline?: string
	start_time?: string
	end_time?: string
	duration?: any
	is_active?: boolean

	kids?: task[]
	assignee_count?: number
}

export interface assignee{
	id?: string | number
	object_type?: string
	object_id?: string | number
	user_id?: string | number
	assigned_date?: string
	assigned_by?: number
	is_active?: boolean

	user?: user
}

export interface user{
	id?: number | string
	file?: string
	name?: string
	email?: string
	password?: string
	language?: string
	can_login?: boolean
	is_active?: boolean

	dep_ids?: string[]
	des_ids?: string[]
	grp_ids?: string[]
	shf_ids?: string[]
	
	departments?: user_department[]
	shifts?: shift[]
	groups?: group[]
}

export interface user_filter extends user{
	department_id?: string | number
	designation_id?: string | number
	group_id?: string | number
	shift_id?: string | number
	page?: number
}

export interface group{
	id?: string
	code?: string
	name?: string
	created_by?: number
	created_date?: string
	is_active?: boolean
}
export interface user_group{
	id?: string
	user_id?: string
	group_id?: string
	code?: string
	name?: string
	start_date?: string
	end_date?: string
	is_active?: boolean
}

export interface designation{
	id?: string
	code?: string
	name?: string
	created_by?: number
	created_date?: string
	is_active?: boolean
}
export interface user_designation{
	id?: string
	user_id?: string
	designation_id?: string
	code?: string
	name?: string
	start_date?: string
	end_date?: string
	is_current?: boolean
	is_active?: boolean
}

export interface department{
	id?: string
	code?: string
	name?: string
	created_by?: number
	created_date?: string
	is_active?: boolean
}
export interface user_department{
	id?: string
	user_id?: string
	department_id?: string
	department?: department
	designation?: designation
	is_current?: boolean
	start_date?: string
	end_date?: string
	is_active?: boolean
}

export interface attachment {
	id?: number
	object_type?: string
	object_id?: number
	name?: string
	info?: string
	file_name?: string
	file_loc?: string
	file_size?: string | number
	file_type?: string
	created_at?: string
	created_by?: number
	user?: user
	is_active?: number

	file?: File
	preview?: string | ArrayBuffer | any
	error?: boolean
	busy?: boolean
}

export interface contact {
	id?: number
	object_type?: string
	object_id?: number | string
	type?: 'work' | 'home' | 'personal' | 'relative' | 'friend' | 'other'
	full_name?: string | null
	country_id?: number | null | string
	state?: string | null
	city?: string | null
	street?: string | null
	address?: string | null
	postal_code?: string | null
	country_code?: string | null
	phone?: string | null
	alternate_phone?: string | null
	email?: string | null
	alternate_email?: string | null
	created_by?: number
	created_at?: string
	is_active?: number

	country?: country
}

export interface country {
	id?: number
	iso?: string
	name?: string
	code?: string
	is_active?: number
}

export interface timesheet {
	id?: number | string;
	date?: string;
	file?: string;
	name?: string;
	user_id?: number;
	shift_id?: number;
	in_time?: any;
	out_time?: any;
	is_in_delay?: 'yes' | 'no' | 'none';
	is_out_early?: 'yes' | 'no' | 'none';
	is_absent?: 'yes' | 'no' | 'none';
	created_at?: string;
	created_by?: number;
	is_active?: number;

	shift_code?: string[]
	shifts?: shift[]
	shift?: shift
}

export interface timesheet_filter{
	type?: 'range' | 'specific'
	date?: string
	date_from?: string
	date_to?: string
	department_id?: string | number
	file?: string
	name?: string
	shift_id?: string | number
	is_in_delay?: 'yes' | 'no' | 'none' | 'all'
	is_out_early?: 'yes' | 'no' | 'none' | 'all'
	is_absent?: 'yes' | 'no' | 'none' | 'all'
	sort_by?: 'file' | 'name' | 'position'
}
  

export interface shift{
	id?: number | string
	code?: string
	name?: string
	info?: string | null
	pos?: number
	in_time?: any
	in_start?: any
	in_delay?: any
	in_end?: any
	out_time?: any
	out_start?: any
	out_early?: any
	out_end?: any
	start_date?: string
	end_date?: string | null
	created_date?: string
	created_by?: number
	is_active?: number
}
export interface user_shift extends shift{
	user_id?: number
	shift_id?: number
	created_at?: string
	is_primary?: boolean
}

