# Web file explorer

### Browser based file explorer, allows navigating up and down folders three, open files.
### Automatically detects file type and resolves file by browser defaults.
### Multi-thread. Creates instance for each processor core.

### Used technologies: 
- uses http for serving html template
- cluster for creating child instances
- uses fs for path resolving and reading files
- serve files by stream
