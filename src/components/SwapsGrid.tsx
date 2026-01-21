import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Heart, MapPin, Clock, User } from "lucide-react";
import { useState } from "react";

interface SwapItem {
  id: string;
  title: string;
  description: string;
  category: string;
  condition: string;
  location: string;
  postedBy: string;
  postedDate: string;
  image: string;
  tags: string[];
}

const SwapsGrid = () => {
  const [selectedItem, setSelectedItem] = useState<SwapItem | null>(null);

  const swapItems: SwapItem[] = [
    {
      id: "1",
      title: "Vintage Leather Jacket",
      description: "Beautiful brown leather jacket in excellent condition. Perfect for someone who loves vintage fashion and wants to give this piece a new life.",
      category: "Fashion",
      condition: "Excellent",
      location: "Portland, OR",
      postedBy: "Sarah M.",
      postedDate: "2 days ago",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop",
      tags: ["Vintage", "Leather", "Outerwear"]
    },
    {
      id: "2",
      title: "Kitchen Stand Mixer",
      description: "Barely used KitchenAid stand mixer. Moving to a smaller place and need to downsize. Comes with all original attachments.",
      category: "Kitchen",
      condition: "Like New",
      location: "Seattle, WA",
      postedBy: "Mike Chen",
      postedDate: "1 week ago",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      tags: ["Kitchen", "Appliance", "Baking"]
    },
    {
      id: "3",
      title: "Yoga Mat & Blocks Set",
      description: "Complete yoga set including premium mat, blocks, and strap. Great for beginners or anyone wanting to practice at home.",
      category: "Fitness",
      condition: "Good",
      location: "San Francisco, CA",
      postedBy: "Elena Rodriguez",
      postedDate: "3 days ago",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      tags: ["Yoga", "Fitness", "Wellness"]
    },
    {
      id: "4",
      title: "Board Game Collection",
      description: "Collection of 5 popular board games including Settlers of Catan, Ticket to Ride, and more. All in great condition with all pieces.",
      category: "Games",
      condition: "Very Good",
      location: "Austin, TX",
      postedBy: "Jordan Kim",
      postedDate: "5 days ago",
      image: "https://images.unsplash.com/photo-1561043433-aaf687c4cf04?w=400&h=300&fit=crop",
      tags: ["Board Games", "Entertainment", "Family"]
    },
    {
      id: "5",
      title: "Acoustic Guitar",
      description: "Beautiful acoustic guitar perfect for beginners or seasoned players. Comes with a case and extra strings.",
      category: "Music",
      condition: "Good",
      location: "Nashville, TN",
      postedBy: "Alex Thompson",
      postedDate: "1 week ago",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      tags: ["Music", "Guitar", "Instrument"]
    },
    {
      id: "6",
      title: "Indoor Plant Bundle",
      description: "Collection of 3 healthy houseplants including pothos, snake plant, and peace lily. Perfect for someone starting their plant journey.",
      category: "Plants",
      condition: "Excellent",
      location: "Denver, CO",
      postedBy: "Maya Patel",
      postedDate: "4 days ago",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
      tags: ["Plants", "Indoor", "Gardening"]
    }
  ];

  const SwapDetailModal = ({ item }: { item: SwapItem }) => (
    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl text-forest">{item.title}</DialogTitle>
      </DialogHeader>
      
      <div className="space-y-6">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-mint text-forest">
              {tag}
            </Badge>
          ))}
        </div>
        
        <p className="text-foreground/80 leading-relaxed">{item.description}</p>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <User size={16} className="text-nature" />
            <span>Posted by {item.postedBy}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-nature" />
            <span>{item.postedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-nature" />
            <span>{item.location}</span>
          </div>
          <div>
            <span className="font-medium">Condition: </span>
            <span className="text-forest">{item.condition}</span>
          </div>
        </div>
        
        <div className="flex gap-3 pt-4">
          <Button variant="gradient" className="flex-1">
            Contact for Swap
          </Button>
          <Button variant="outline" size="icon" className="border-forest text-forest hover:bg-forest/10 scale-on-hover">
            <Heart size={20} />
          </Button>
        </div>
      </div>
    </DialogContent>
  );

  return (
    <section className="py-16 lg:py-24 dynamic-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20" />
      
      {/* Dynamic background elements */}
      <div className="absolute top-20 left-20 w-28 h-28 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl floating-animation"></div>
      <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-r from-pink-400/15 to-red-400/15 rounded-full blur-2xl wave-animation" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-lg bounce-animation" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Available Swaps
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing items from your community ready for their next adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {swapItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer shadow-card hover:shadow-hover hover:scale-105 transition-all duration-500 border-mint/20 group bg-white/90 backdrop-blur-sm scale-on-hover">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-600"
                    />
                    <Badge className="absolute top-2 right-2 bg-forest text-white">
                      {item.category}
                    </Badge>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-forest group-hover:text-sage transition-eco">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-foreground/70 text-sm mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-nature">
                      <div className="flex items-center gap-1">
                        <MapPin size={12} />
                        <span>{item.location}</span>
                      </div>
                      <span>{item.postedDate}</span>
                    </div>
                    
                    <div className="flex justify-between items-center mt-3">
                      <Badge variant="outline" className="text-xs border-sage text-sage">
                        {item.condition}
                      </Badge>
                      <Button size="sm" variant="eco" className="text-xs transform hover:scale-110 transition-all duration-600">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <SwapDetailModal item={item} />
            </Dialog>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="gradient" className="transform hover:scale-105 transition-all duration-600">
            Load More Swaps
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SwapsGrid;