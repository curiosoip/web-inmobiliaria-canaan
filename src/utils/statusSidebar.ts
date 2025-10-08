class StatusSidebar {

    private static instance: StatusSidebar;
    private status: boolean;

    private constructor(status: boolean = false) {
        this.status = status;
    }

    static getInstance(): StatusSidebar {
        if (!StatusSidebar.instance) {
            StatusSidebar.instance = new StatusSidebar();
        }
        return StatusSidebar.instance;
    }

    getStatus() {
        return this.status;
    }

    setStatus(status: boolean) {
        this.status = status;
    }
    
}
