
class UrlMappings {
    static mappings = {
        "/practise/users/$action?/$id?"(controller: "users", action: "index")
        "/practise/$action?/$id?"(controller: "users", action: "index")
        "/$controller?/$action?/$id?" {
            constraints {
                // optional constraints here
            }
        }
        "/"(view: "/index")
        "500"(view: '/error')
    }

    static defaultAction = ["controller": "users", "action": "index"]
}
