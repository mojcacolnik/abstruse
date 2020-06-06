package shared

const (
	// ServicePrefix is etcd global prefix.
	ServicePrefix = "abstruse"
	// WorkerService is etcd worker service prefix.
	WorkerService = "workers/register"
	// WorkersCapacity etcd workers capacity prefix.
	WorkersCapacity = "/abstruse/workers/capacity"
	// WorkersCapacityLock etcd workers capacity lock prefix.
	WorkersCapacityLock = "/abstruse/workers/capacity-lock"
	// QueuePrefix etcd queue service prefix.
	QueuePrefix = "/abstruse/scheduler/queue"
	// PendingPrefix etcd jobs service prefix.
	PendingPrefix = "/abstruse/scheduler/pending"
	// StopPrefix etcd jobs stop service prefix.
	StopPrefix = "/abstruse/scheduler/stop"
	// DonePrefix etcd jobs done service prefix.
	DonePrefix = "/abstruse/scheduler/done"
	// DefaultQueuePriority global.
	DefaultQueuePriority = 1000
)
