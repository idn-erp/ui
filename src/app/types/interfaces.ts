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
    code?: string
    name?: string
    email?: string
    password?: string
    language?: string
    is_active?: boolean

    department_id?: string | number
    designation_id?: string | number
    group_id?: string | number
}

export interface group{
    id?: string
    code: string
    name?: string
    created_by?: number
    created_date?: string
    is_active?: boolean
}

export interface designation{
    id?: string
    code: string
    name?: string
    created_by?: number
    created_date?: string
    is_active?: boolean
}

export interface department{
    id?: string
    code: string
    name?: string
    created_by?: number
    created_date?: string
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
    file_size?: string
    file_type?: string
    created_at?: string
    created_by?: number
    is_active?: number

    file?: File
    preview?: string | ArrayBuffer | any
}
