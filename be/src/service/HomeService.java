@Service
public class HomeService {
  @Autowired private BannerRepository bannerRepo;
  @Autowired private JobRepository jobRepo;
  @Autowired private CompanyRepository companyRepo;
  @Autowired private CategoryRepository categoryRepo;
  @Autowired private LocationRepository locationRepo;
  @Autowired private GuideRepository guideRepo;

  public List<Banner> getBanners() {
    return bannerRepo.findAllByOrderByIdAsc();
  }

  public List<Job> getHotJobs(int limit) {
    return jobRepo.findByIsHotTrue(PageRequest.of(0, limit));
  }

  public Page<Job> getLatestJobs(int page, int size) {
    return jobRepo.findAll(PageRequest.of(page, size, Sort.by("postedDate").descending()));
  }

  public List<Company> getFeaturedCompanies(int limit) {
    return companyRepo.findByIsFeaturedTrue(PageRequest.of(0, limit));
  }

  public List<Category> getCategories() {
    return categoryRepo.findAll();
  }

  public List<Location> getLocations() {
    return locationRepo.findAll();
  }

  public List<Guide> getGuides(int limit) {
    return guideRepo.findTopN(PageRequest.of(0, limit));
  }

  public Map<String, Long> getStats() {
    long totalJobs = jobRepo.count();
    long totalCompanies = companyRepo.count();
    long totalApplicants = 0; // tuỳ table ứng viên
    return Map.of(
      "totalJobs", totalJobs,
      "totalCompanies", totalCompanies,
      "totalApplicants", totalApplicants
    );
  }
}
