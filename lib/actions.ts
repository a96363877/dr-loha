

export const playNotificationSound = () => {
    const audio=new Audio('/not1.mp3')
    if (audio) {
      audio!.play().catch((error) => {
        console.error('Failed to play sound:', error);
      });
    }
  };