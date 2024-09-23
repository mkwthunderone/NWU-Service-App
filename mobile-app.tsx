import { useState } from "react"
import { Star, Search, ChevronRight, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const services = [
  { id: 1, name: "Main Dining Hall", category: "Dining", avgRating: 4.2, reviewCount: 156 },
  { id: 2, name: "Central Library", category: "Academic", avgRating: 4.5, reviewCount: 203 },
  { id: 3, name: "Student Health Center", category: "Support", avgRating: 3.8, reviewCount: 89 },
  { id: 4, name: "Campus Gym", category: "Recreational", avgRating: 4.0, reviewCount: 178 },
  { id: 5, name: "Career Services", category: "Support", avgRating: 4.3, reviewCount: 112 },
  { id: 6, name: "Computer Lab", category: "Academic", avgRating: 3.9, reviewCount: 95 },
]

const categories = ["All", "Academic", "Dining", "Recreational", "Support"]

export default function MobileApp() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredServices = services.filter(service => 
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === "All" || service.category === selectedCategory)
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 p-4 relative overflow-hidden max-w-md mx-auto">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8L3N2Zz4=')] opacity-20"></div>
      <div className="relative z-10 flex flex-col h-screen">
        <header className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 relative">
            <div className="absolute inset-0 bg-purple-600 rounded-full blur-sm"></div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NWU_Logo-Purple-ymSiHYFf73lkJJJ4Fshndw7PIk4WWe.png"
              alt="North-West University Logo"
              width={40}
              height={40}
              className="rounded-full relative z-10"
            />
          </div>
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">NWU Services</h1>
          <Button variant="ghost" size="icon" className="text-white">
            <Menu className="h-6 w-6" />
          </Button>
        </header>

        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-purple-400" />
            <Input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 bg-gray-800 bg-opacity-50 text-white border-purple-500 focus:border-purple-400 focus:ring-purple-400 placeholder-gray-500 w-full"
            />
          </div>
        </div>

        <div className="mb-4">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="bg-gray-800 bg-opacity-50 text-white border-purple-500 w-full">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 text-white border-purple-500">
              {categories.map((category) => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-grow overflow-auto">
          {filteredServices.map((service) => (
            <Card key={service.id} className="bg-gray-800 bg-opacity-50 border-purple-500 hover:bg-opacity-70 transition-all duration-300 mb-3">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg text-purple-300">{service.name}</CardTitle>
                    <CardDescription className="text-gray-400">{service.category}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-purple-600 text-white">
                    {service.avgRating.toFixed(1)}
                    <Star className="w-4 h-4 ml-1 inline-block fill-current" />
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{service.reviewCount} reviews</span>
                  <Button variant="ghost" className="text-purple-400 hover:text-purple-300 hover:bg-purple-900 hover:bg-opacity-50 p-0">
                    Rate / View
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <footer className="mt-4">
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50">
            Load More Services
          </Button>
        </footer>
      </div>
    </div>
  )
}
