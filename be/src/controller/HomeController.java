@RestController
@RequestMapping("/api/home")
public class HomeController {
  @Autowired private HomeService homeService;

  @GetMapping("/banners")
  public List<Banner> banners() {
    return homeService.getBanners();
  }

  @GetMapping("/jobs/hot")
  public List<Job> hotJobs(@RequestParam(defaultValue="5") int limit) {
    return homeService.getHotJobs(limit);
  }

  @GetMapping("/jobs/latest")
  public Page<Job> latestJobs(
      @RequestParam(defaultValue="0") int page,
      @RequestParam(defaultValue="10") int size) {
    return homeService.getLatestJobs(page, size);
  }

  @GetMapping("/companies/featured")
  public List<Company> featuredCompanies(@RequestParam(defaultValue="5") int limit) {
    return homeService.getFeaturedCompanies(limit);
  }

  @GetMapping("/references/categories")
  public List<Category> categories() {
    return homeService.getCategories();
  }

  @GetMapping("/references/locations")
  public List<Location> locations() {
    return homeService.getLocations();
  }

  @GetMapping("/guides")
  public List<Guide> guides(@RequestParam(defaultValue="5") int limit) {
    return homeService.getGuides(limit);
  }

  @GetMapping("/stats")
  public Map<String, Long> stats() {
    return homeService.getStats();
  }
}
