@Entity
@Table(name = "candidates")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Candidate {
    @Id
    private Integer userId;

    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id")
    private User user;

    private String fullname;
    private String phone;
    private LocalDate birthday;
    private String address;
    private String avatar;
    private String gender;
}
