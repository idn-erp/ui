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
}