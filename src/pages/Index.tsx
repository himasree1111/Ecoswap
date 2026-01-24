import HeroSection from "@/components/HeroSection";
import NewsletterSection from "@/components/NewsletterSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import BrowseItems from "@/components/SwapsGrid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Package, Heart, Clock, CheckCircle, XCircle, User, Shield } from "lucide-react";

const Index = () => {
  // Mock data for account section
  const myListings = [
    {
      id: "1",
      title: "Organic Chemistry Textbook",
      status: "approved",
      requests: 3,
      postedDate: "1 week ago"
    },
    {
      id: "2",
      title: "Desk Lamp",
      status: "pending",
      requests: 0,
      postedDate: "2 days ago"
    }
  ];

  const myRequests = [
    {
      id: "1",
      itemName: "Calculus Textbook",
      status: "accepted",
      requestedDate: "3 days ago"
    },
    {
      id: "2",
      itemName: "Winter Jacket",
      status: "pending",
      requestedDate: "1 day ago"
    }
  ];

  // Mock data for admin section
  const pendingPosts = [
    {
      id: "1",
      title: "Physics Study Guide",
      postedBy: "Tom Wilson",
      postedDate: "1 day ago",
      category: "Books"
    },
    {
      id: "2",
      title: "Bluetooth Speaker",
      postedBy: "Lisa Chang",
      postedDate: "2 days ago",
      category: "Electronics"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
          <Clock className="mr-1 h-3 w-3" />
          Pending
        </span>;
      case "approved":
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          <CheckCircle className="mr-1 h-3 w-3" />
          Approved
        </span>;
      case "given":
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          <CheckCircle className="mr-1 h-3 w-3" />
          Given Away
        </span>;
      case "accepted":
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          <CheckCircle className="mr-1 h-3 w-3" />
          Accepted
        </span>;
      case "rejected":
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
          <XCircle className="mr-1 h-3 w-3" />
          Rejected
        </span>;
      default:
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          Unknown
        </span>;
    }
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen dynamic-bg particle-bg relative overflow-hidden">
        {/* Moving animated shapes */}
        <div className="moving-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        
        {/* Dynamic floating elements with different animations */}
        <div className="absolute inset-0 opacity-20 z-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl wave-animation"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-lg bounce-animation"></div>
          <div className="absolute top-60 left-1/3 w-40 h-40 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-2xl floating-animation"></div>
          <div className="absolute bottom-40 right-10 w-36 h-36 bg-gradient-to-r from-green-400 to-teal-400 rounded-full blur-xl wave-animation" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-20 w-28 h-28 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-lg rotate-animation"></div>
          <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-r from-pink-400 to-red-400 rounded-full blur-md bounce-animation" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Content with enhanced fade-in animations */}
        <div className="relative z-20">
          <div id="home" className="fade-in-up">
            <HeroSection />
          </div>
          <div id="browse" className="fade-in-up" style={{ animationDelay: '0.3s' }}>
            <BrowseItems />
          </div>
          
          {/* My Account Section */}
          <section id="account" className="py-16 lg:py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-green-900/20" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-8 text-center">
                  My Account
                </h2>
                
                <Tabs defaultValue="listings" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="listings" className="flex items-center gap-2">
                      <Package className="h-4 w-4" />
                      My Listings
                    </TabsTrigger>
                    <TabsTrigger value="requests" className="flex items-center gap-2">
                      <Heart className="h-4 w-4" />
                      My Requests
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="listings">
                    <div className="space-y-4">
                      {myListings.map((listing) => (
                        <Card key={listing.id} className="hover:shadow-md transition-shadow">
                          <CardHeader className="pb-3">
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-lg">{listing.title}</CardTitle>
                              {getStatusBadge(listing.status)}
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="flex justify-between items-center text-sm text-gray-600">
                              <span>Posted {listing.postedDate}</span>
                              <span>{listing.requests} requests received</span>
                            </div>
                            <div className="flex gap-2 mt-3">
                              <Button size="sm" variant="outline">
                                Edit Listing
                              </Button>
                              <Button size="sm" variant="destructive" className="ml-auto">
                                Delete
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                      <div className="text-center mt-6">
                        <Button size="lg" variant="gradient">
                          Post New Item
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="requests">
                    <div className="space-y-4">
                      {myRequests.map((request) => (
                        <Card key={request.id} className="hover:shadow-md transition-shadow">
                          <CardHeader className="pb-3">
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-lg">Request for: {request.itemName}</CardTitle>
                              {getStatusBadge(request.status)}
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="text-sm text-gray-600">
                              Requested {request.requestedDate}
                            </div>
                            <Button size="sm" variant="outline" className="mt-3">
                              View Details
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </section>
          
          {/* Admin Panel Section */}
          <section id="admin" className="py-16 lg:py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 text-center flex items-center justify-center gap-3">
                  <Shield className="h-8 w-8" />
                  Admin Panel
                </h2>
                
                <Tabs defaultValue="pending" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="pending" className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Pending Posts
                    </TabsTrigger>
                    <TabsTrigger value="reports" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      User Reports
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="pending">
                    <div className="space-y-4">
                      {pendingPosts.map((post) => (
                        <Card key={post.id} className="hover:shadow-md transition-shadow">
                          <CardHeader className="pb-3">
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-lg">{post.title}</CardTitle>
                                <p className="text-sm text-gray-600">Posted by {post.postedBy}</p>
                              </div>
                              <Badge variant="secondary">{post.category}</Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="text-sm text-gray-600 mb-4">
                              Submitted {post.postedDate}
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="default" className="bg-green-600 hover:bg-green-700">
                                Approve
                              </Button>
                              <Button size="sm" variant="destructive">
                                Reject
                              </Button>
                              <Button size="sm" variant="outline" className="ml-auto">
                                View Details
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="reports">
                    <Card className="text-center py-12">
                      <CardContent>
                        <User className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                        <p className="text-gray-500">No user reports at this time</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </section>
          
          <div className="fade-in-up" style={{ animationDelay: '0.9s' }}>
            <FAQSection />
          </div>
          <div className="fade-in-up" style={{ animationDelay: '1.2s' }}>
            <NewsletterSection />
          </div>
          <div className="fade-in-up" style={{ animationDelay: '1.5s' }}>
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;
