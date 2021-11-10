export default function ({ route, redirect }) {
    if (route.path == '/doc') {
        return redirect('/doc/getting-started')
    }
}