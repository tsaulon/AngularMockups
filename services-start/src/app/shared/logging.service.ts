export class LoggingService {
    logStatusChange(status: string) {
        console.log(`A server status has changed! Status is now ${status}`)
    }
}