function MessageLoading() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2 ">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent" />
      <p className="text-center text-lg">Retrieving messages</p>
    </div>
  );
}

export default MessageLoading;
