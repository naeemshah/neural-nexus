import { useState, useEffect } from 'react';

interface Notification {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  duration: number;
}

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const handleNotification = (event: CustomEvent) => {
      const { type, message, duration = 5000 } = event.detail;
      addNotification(type, message, duration);
    };

    window.addEventListener('notification', handleNotification as EventListener);
    
    return () => {
      window.removeEventListener('notification', handleNotification as EventListener);
    };
  }, []);

  const addNotification = (type: Notification['type'], message: string, duration: number) => {
    const id = Date.now().toString();
    const newNotification: Notification = { id, type, message, duration };
    
    setNotifications(prev => [...prev, newNotification]);
    
    // Auto-remove after duration
    setTimeout(() => {
      removeNotification(id);
    }, duration);
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const getTypeStyles = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return 'bg-emerald-cyber/10 border-emerald-cyber/30 text-emerald-cyber';
      case 'error':
        return 'bg-red-500/10 border-red-500/30 text-red-500';
      case 'warning':
        return 'bg-yellow-500/10 border-yellow-500/30 text-yellow-500';
      case 'info':
        return 'bg-blue-500/10 border-blue-500/30 text-blue-500';
      default:
        return 'bg-white/10 border-white/30 text-white';
    }
  };

  const getTypeIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        );
      case 'error':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        );
      case 'warning':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
          </svg>
        );
      case 'info':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        );
    }
  };

  if (notifications.length === 0) return null;

  return (
    <div className="fixed top-20 sm:top-24 right-4 sm:right-6 z-50 space-y-2 sm:space-y-3 max-w-sm w-full sm:w-96">
      {notifications.map(notification => (
        <div
          key={notification.id}
          className={`${getTypeStyles(notification.type)} border rounded-lg sm:rounded-xl p-3 sm:p-4 backdrop-blur-xl shadow-lg animate-slide-in`}
          role="alert"
        >
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5">
              {getTypeIcon(notification.type)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium">{notification.message}</p>
            </div>
            <button
              onClick={() => removeNotification(notification.id)}
              className="flex-shrink-0 ml-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Close notification"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          {/* Progress bar */}
          <div className="mt-2 sm:mt-3 h-0.5 bg-current/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-current/50 rounded-full animate-progress"
              style={{ 
                animationDuration: `${notification.duration}ms`,
                animationTimingFunction: 'linear'
              }}
            />
          </div>
        </div>
      ))}
      
      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes progress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
        
        .animate-progress {
          animation: progress linear forwards;
        }
      `}</style>
    </div>
  );
};

export default NotificationSystem;